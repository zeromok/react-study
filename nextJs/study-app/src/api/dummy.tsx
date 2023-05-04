import useGet from '../hoooks/useGet';

interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
export default function Result() {
    const { data, error, pending: loading } = useGet('users');

    if (loading) {
        return (
            <>
                <p>Loading...</p>
            </>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Error fetching data</h1>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Got data!</h1>
            {data
                ? data.map((item) => (
                      <div key={item.id}>
                          <ul style={{ listStyleType: 'none' }}>
                              <li>NAME : {item.name}</li>
                              <li>USERNAME : {item.username}</li>
                              <li>E-MAIL : {item.email}</li>
                              <ul style={{ marginLeft: '40px' }}>
                                  <li>STREET : {item.address.street}</li>
                                  <li>SUITE : {item.address.suite}</li>
                                  <li>CITY : {item.address.city}</li>
                                  <li>ZIPCODE : {item.address.zipcode}</li>
                                  <ul style={{ marginLeft: '40px' }}>
                                      <li>{item.address.geo.lat}</li>
                                      <li>{item.address.geo.lng}</li>
                                  </ul>
                              </ul>
                              <li>PHONE : {item.phone}</li>
                              <li>WEBSITE : {item.website}</li>
                              <ul style={{ marginLeft: '40px' }}>
                                  <li>{item.company.name}</li>
                                  <li>{item.company.catchPhrase}</li>
                                  <li>{item.company.bs}</li>
                              </ul>
                          </ul>
                          <br />
                      </div>
                  ))
                : null}
        </div>
    );
}
