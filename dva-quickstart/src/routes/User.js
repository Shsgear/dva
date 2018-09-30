import User from '../components/User';
import MainLayout from '../layouts/index';

function UserRoute ({location}) {
  return (
    <MainLayout location={location}>
      <div>
        <User></User>
      </div>
    </MainLayout>
  )
};

export default UserRoute;
