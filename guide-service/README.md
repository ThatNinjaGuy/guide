# Guide Service

Guide Service is a Node.js application designed to seed data into a Firebase Realtime Database. It includes functionality for seeding categories, experiences, products, and universities.

## Prerequisites

- Node.js and npm installed on your machine.
- Firebase project set up with Realtime Database enabled.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/guide-service.git
   cd guide-service
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase configuration:

   ```plaintext
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_auth_domain
   FIREBASE_DATABASE_URL=your_database_url
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_STORAGE_BUCKET=your_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   FIREBASE_APP_ID=your_app_id
   FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

## Usage

To seed the database, run the following command:

```bash
npm run seed
```

This will populate your Firebase Realtime Database with the predefined data for categories, experiences, products, and universities.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
