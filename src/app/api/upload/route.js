import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get('file');

    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    
    // For this, we'll just write it to the filesystem in a new location
    const path = `/Users/jaswant/Desktop/frontend assignment/photobook/public/uploads/${file.name}`;
    
    await writeFile(path, buffer);
    console.log(`Open ${path} to see the uploaded file`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ success: false });
  }
}
