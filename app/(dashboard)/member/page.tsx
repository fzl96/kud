import MemberForm from "@/components/member-form";

const getMembers = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/members");
  return res.json();
};

export default async function MemberPage() {
  const members = await getMembers();
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold">MemberPage</h1>
        <MemberForm />

        <div className="mt-5">
          <h1 className="text-2xl font-semibold">Member List</h1>
          <div className="mt-5">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border-2 border-gray-900 px-3 py-2">Nama</th>
                  <th className="border-2 border-gray-900 px-3 py-2">Alamat</th>
                  <th className="border-2 border-gray-900 px-3 py-2">No. HP</th>
                </tr>
              </thead>
              <tbody>
                {members.map(
                  (member: {
                    id: string;
                    name: string;
                    address: string;
                    phone: string;
                  }) => (
                    <tr key={member.id}>
                      <td className="border-2 border-gray-900 px-3 py-2">
                        {member.name}
                      </td>
                      <td className="border-2 border-gray-900 px-3 py-2">
                        {member.address}
                      </td>
                      <td className="border-2 border-gray-900 px-3 py-2">
                        {member.phone}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
