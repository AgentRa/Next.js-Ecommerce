# Next.js Ecommerce

Professional ecommerce website built from scratch using modern web development technologies.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Overview
This project is a fully-featured ecommerce platform designed for scalability and maintainability. It leverages the latest tools and frameworks, including Next.js and TypeScript, to provide a modern development experience.

---

## Features
- **Authentication & Authorization** - Powered by NextAuth for secure login.
- **Payment Integration** - Supports PayPal and Stripe APIs for payments.
- **Responsive Design** - Built with Tailwind CSS and ShadCN UI for responsive and customizable UI.
- **Form Validation** - Utilizes React Hook Form and Zod for robust form validation.
- **Database Management** - PostgreSQL with Prisma ORM for data handling.
- **Charts and Data Visualization** - Recharts for creating rich data visualizations.
- **File Uploads** - Implemented with Uploadthing for seamless file handling.
- **Testing** - Jest for unit and integration testing.

---

## Tech Stack
- **Frontend**: Next.js v15, React v19, TypeScript, Tailwind CSS, ShadCN UI
- **Backend**: Next.js API routes, PostgreSQL, Prisma
- **Authentication**: NextAuth
- **Forms**: React Hook Form, Zod
- **Payments**: PayPal, Stripe APIs
- **File Uploads**: Uploadthing
- **Charts**: Recharts
- **Testing**: Jest

---

## Installation

1. Clone the repository:
```bash
$ git clone https://github.com/username/nextjs-ecommerce.git
```

2. Navigate to the project directory:
```bash
$ cd nextjs-ecommerce
```

3. Install dependencies:
```bash
$ npm install
# or
$ yarn install
```

4. Set up environment variables (see below).

5. Run the development server:
```bash
$ npm run dev
# or
$ yarn dev
```

---

## Environment Variables
Create a `.env.local` file in the root directory and add the following environment variables:

```plaintext
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-client-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
UPLOADTHING_API_KEY=your-uploadthing-api-key
```

---

## Scripts
- **dev** - Starts the development server.
- **build** - Builds the project for production.
- **start** - Starts the production server.
- **lint** - Runs ESLint for code quality checks.
- **test** - Runs Jest for testing.

---

## Testing
This project uses **Jest** for testing.

Run tests with the following command:
```bash
$ npm run test
# or
$ yarn test
```

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push your branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements
Special thanks to all contributors and open-source libraries used in this project.

