import { Web3Storage, getFilesFromPath } from 'web3.storage';
import dotenv from 'dotenv';
dotenv.config();

function makeStorageClient() {
  return new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN });
}

async function main() {
  const filePath = 'data/violations.json';

  try {
    const files = await getFilesFromPath(filePath);
    const client = makeStorageClient();
    const cid = await client.put(files);

    console.log('✅ Upload successful!');
    console.log('📦 CID:', cid);
    console.log(`🔗 View link: https://${cid}.ipfs.w3s.link`);
  } catch (err) {
    console.error('❌ Upload failed:', err);
  }
}

main();
