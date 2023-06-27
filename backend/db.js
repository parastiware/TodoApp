import { connect } from 'mongoose';


function connectDB() {
  const username = 'dbUser';
  const password = 'P6vBtmXeHCs9akM7';
  const database = 'todoStore';

  const uri = `mongodb+srv://${username}:${password}@cluster0.6jy92ta.mongodb.net/${database}?retryWrites=true&w=majority`;

  connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch(error => {
      console.error('Failed to connect to MongoDB:', error);
    });
}

export default connectDB;
