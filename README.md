# Note App using Express + Graphql
This project is intended to Kampus Merdeka Internship Selection Test in Dibimbing.
The required feature is to run simple CRUD of Noteapp.

# How to run locally
1. Clone the repo
   ```bash
   git clone https://github.com/Luthfiyanto/Note-graphql.git
   ```
2. Install dependencies
   ```bash
   npm i
   ```
3. Check your credentials on .env.development. Make sure you have the correct credentials for your PostgreSQL database. Or create .env.local so that it doesn't get tracked by git.
4. Create your database if doesn't exist
   ```bash
   npm run db:create
   ```
5. Run the migration
   ```bash
   npm run db:migrate
   ```
6. Run the project
   ```bash
   npm run dev
   ```
   
