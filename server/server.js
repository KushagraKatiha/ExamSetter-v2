require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Teacher = require('./models/Teacher');
const app = require('./app');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Connect to MongoDB
    const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/exam_setter';
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');

    // Create dummy admin if not exists
    const adminEmail = 'admin@example.com';
    const existingAdmin = await Teacher.findOne({ email: adminEmail });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await Teacher.create({
        name: 'Admin User',
        email: adminEmail,
        password: hashedPassword,
        role: 'admin',
        isActive: true,
      });
      console.log('👤 Dummy admin created');
    }

    // Start Express server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
