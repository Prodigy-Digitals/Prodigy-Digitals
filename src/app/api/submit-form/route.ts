import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Create a Google Sheets service account and place credentials in a secure location
// Never expose these credentials in client-side code
const CREDENTIALS = {
  client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

// Your Google Sheet ID - you can find this in the URL of your sheet
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'ContactForm'; // Ensure this matches the sheet name in your Google Sheet

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, mobile, details } = body;
    
    // Basic validation
    if (!name || !email || !projectType || !mobile || !details) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Setup auth
    const auth = new google.auth.GoogleAuth({
      credentials: CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth });
    
    // Add timestamp
    const timestamp = new Date().toISOString();
    
    // Append to sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [timestamp, name, email, projectType, mobile, details]
        ],
      },
    });
    
    return NextResponse.json(
      { message: 'Form submitted successfully', data: response.data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { message: 'Error submitting form' },
      { status: 500 }
    );
  }
}