"use client";

import { useState } from "react";
import Papa from "papaparse";
import toast from "react-hot-toast";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const EmailSender = () => {
  const [file, setFile] = useState<File | null>(null);
  const [emails, setEmails] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [sending, setSending] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const { quill, quillRef } = useQuill();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleAttachmentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAttachments(Array.from(event.target.files));
    }
  };

  const handleSend = async () => {
    if (!file) {
      toast.error("Please upload a CSV file containing emails.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const csvData = e.target?.result as string;
      const parsedData = Papa.parse<string[]>(csvData, { header: false });
      const emailArray: string[] = parsedData.data.map((row: string[]) => row[0]).filter(Boolean);
      setEmails(emailArray);
    };
    reader.readAsText(file);

    const formData = new FormData();
    formData.append("Name", (document.getElementById("name") as HTMLInputElement).value);
    formData.append("EMAIL", (document.getElementById("email") as HTMLInputElement).value);
    formData.append("EMAIL_APP_PASSWORD", (document.getElementById("apppassword") as HTMLInputElement).value);
    formData.append("BCC", (document.getElementById("bcc") as HTMLInputElement).value);
    formData.append("CC", (document.getElementById("cc") as HTMLInputElement).value);
    formData.append("RECIEVER_MAILS", JSON.stringify(emails));
    formData.append("MAIL_SUBJECT", (document.getElementById("subject") as HTMLInputElement).value);
    formData.append("MAIL_BODY", quill ? quill.root.innerHTML : "");
    attachments.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    setSending(true);
    setRemainingTime(emails.length * 15);
    toast.success(`Sending emails, please wait...`);

    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, emails.length * 15000);
    console.log("Sending emails to", emails);
    const response = await fetch("/api/mail", {
      method: "POST",
      body: formData,
    });
    
    setSending(false);
    if (response.ok) {
      toast.success("Emails sent successfully!");
    } else {
      toast.error("Failed to send emails.");
    }
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] py-8 px-4 text-white">
      <div className="max-w-3xl mx-auto bg-[#242424] rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[rgba(249,227,98,1)] p-6">
          <h2 className="text-2xl font-bold text-[#1c1c1c]">Bulk Email Sender</h2>
          <p className="text-[#1c1c1c] mt-2">Send personalized emails to multiple recipients</p>
        </div>
        
        <div className="p-8">
          {/* Sender Information Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Sender Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg focus:ring-2 focus:ring-[rgba(249,227,98,1)] focus:border-transparent text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Sender Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg focus:ring-2 focus:ring-[rgba(249,227,98,1)] focus:border-transparent text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="apppassword" className="block text-sm font-medium">
                App Password
              </label>
              <input
                type="password"
                id="apppassword"
                placeholder="••••••••••••••••"
                className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg focus:ring-2 focus:ring-[rgba(249,227,98,1)] focus:border-transparent text-white"
              />
            </div>

            {/* Email Content Section */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter email subject"
                className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg focus:ring-2 focus:ring-[rgba(249,227,98,1)] focus:border-transparent text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Email Content
              </label>
                <div className="border border-gray-700 rounded-lg bg-[#2a2a2a] p-2">
                <div ref={quillRef} className="h-64 text-white" />
                </div>
            </div>

            {/* Recipients Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="cc" className="block text-sm font-medium">
                  CC
                </label>
                <input
                  type="text"
                  id="cc"
                  placeholder="cc@example.com"
                  className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg focus:ring-2 focus:ring-[rgba(249,227,98,1)] focus:border-transparent text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="bcc" className="block text-sm font-medium">
                  BCC
                </label>
                <input
                  type="text"
                  id="bcc"
                  placeholder="bcc@example.com"
                  className="w-full p-3 border border-gray-700 bg-[#2a2a2a] rounded-lg focus:ring-2 focus:ring-[rgba(249,227,98,1)] focus:border-transparent text-white"
                />
              </div>
            </div>

            {/* File Upload Section */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Recipients List (CSV)
                </label>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[rgba(249,227,98,0.2)] file:text-[rgba(249,227,98,1)] hover:file:bg-[rgba(249,227,98,0.3)]"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Attachments
                </label>
                <input
                  type="file"
                  multiple
                  onChange={handleAttachmentsChange}
                  className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[rgba(249,227,98,0.2)] file:text-[rgba(249,227,98,1)] hover:file:bg-[rgba(249,227,98,0.3)]"
                />
              </div>
            </div>

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={sending}
              className="w-full py-3 px-4 bg-[rgba(249,227,98,1)] hover:bg-[rgba(249,227,98,0.8)] text-[#1c1c1c] font-extrabold rounded-full transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#1c1c1c]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending... ({remainingTime}s)
                </span>
              ) : (
                "Send Emails"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSender;
