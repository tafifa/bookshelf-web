import Avatar from 'react-avatar';

function ProfilePage() {
  const data = {
    name: 'Anonymous'
    
  }

  return (
    <div className='m-2 mt-3 mb-3 p-5 bg-white rounded-lg'>
      <h2 className="text-3xl">Welcome, {data.name}!</h2>
      <Avatar name={data.name} round color='cyan' size="150" className='mb-5'/>
      <table className='w-full'>
        <tr>
          <th>Name:</th>
          <td>{data.name}</td>
        </tr>
        <tr>
          <th>Telephone:</th>
          <td>555 77 854</td>
        </tr>
        <tr>
          <th>Telephone:</th>
          <td>555 77 855</td>
        </tr>
      </table>
    </div>
  )
}

export default ProfilePage;