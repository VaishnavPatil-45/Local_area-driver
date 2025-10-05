🚖 Local Area Driver Network

A web application that connects local drivers with passengers in their area.
Passengers can quickly find available drivers, view their contact information, and connect via direct call or WhatsApp integration. Drivers can see a list of nearby passengers and choose whom they want to pick up.

🌟 Features
For Passengers

📍 Access names & details of local area drivers.

🚕 Request a drop to their destination.

📞 Contact sharing with drivers.

📲 Direct call & WhatsApp integration to connect with drivers instantly.

For Drivers

👤 View a list of passengers requesting rides.

✅ Choose which passenger to accept.

📞 Call or WhatsApp the passenger directly.

🔒 Secure and verified communication system.

🛠️ Tech Stack

Frontend: React.js

Backend: Node.js + Express.js

Database: MySQL

Other Integrations:

Twilio API (for calling system)

WhatsApp API (for chat & messaging)

⚙️ Installation
1. Clone the repository
git clone https://github.com/your-username/local-area-driver-network.git
cd local-area-driver-network

2. Install dependencies
Backend
cd backend
npm install

Frontend
cd frontend
npm install

3. Setup Database (MySQL)

Create a new MySQL database.

Import the schema from /database/schema.sql.

Update database credentials in backend/config/db.js.

4. Configure Environment Variables

Create a .env file in the backend folder:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=driver_network

TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
WHATSAPP_API_KEY=your_whatsapp_key

5. Run the Project
Start Backend
cd backend
npm start

Start Frontend
cd frontend
npm start


The frontend runs at: http://localhost:3000

The backend runs at: http://localhost:5000

📌 Future Enhancements

🌍 Live location tracking with Google Maps API.

⭐ Ratings & feedback system for both drivers and passengers.

🔔 Real-time notifications for ride updates.

💳 Online payment integration.
