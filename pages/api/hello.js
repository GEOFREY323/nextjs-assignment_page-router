// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // Handle GET requests
  if (req.method === 'GET') {
    res.status(200).json({ 
      message: 'Success! This is my API route.',
      timestamp: new Date().toISOString()
    });
  } 
  // Handle POST requests
  else if (req.method === 'POST') {
    const { name } = req.body;
    res.status(201).json({ message: `Hello ${name || 'World'}!` });
  } 
  // Error handling for unsupported methods
  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}