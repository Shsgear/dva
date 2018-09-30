import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
  initialState: {
    products: [
      { Name: 'dva', id: 1 },
      { Name: 'dva-1', id: 2 },
    ],
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/products').default);
app.model(require('./models/user').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
