import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// routes
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

// db
import connectMongoDB from './db/connectMongoDB.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server is running on port ${PORT}`)
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});

