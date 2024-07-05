const Rows = () => {
  const studentsProfile = [
    {
      id: "2",
      name: "Alice Smith",
      imagePath: "/avatar.png",
      score: "A+",
      percentage: 94.2,
      class: "one",
    },
    {
      id: "2",
      name: "Bob Smith",
      imagePath: "/avatar.png",
      score: "A+",
      percentage: 94.2,
      class: "one",
    },
    {
      id: "3",
      name: "Charlie Brown",
      imagePath: "/avatar.png",
      score: "A",
      percentage: 68.0,
      class: "one",
    },
    {
      id: "4",
      name: "David Lee",
      imagePath: "/avatar.png",
      score: "A",
      percentage: 65.0,
      class: "one",
    },
    {
      id: "5",
      name: "Emma Wilson",
      imagePath: "/avatar.png",
      score: "A-",
      percentage: 52.8,
      class: "one",
    },
    {
      id: "6",
      name: "Frank Miller",
      imagePath: "/avatar.png",
      score: "A+",
      percentage: 70.4,
      class: "one",
    },
    {
      id: "7",
      name: "Grace Davis",
      imagePath: "/avatar.png",
      score: "B",
      percentage: 37,
      class: "one",
    },
    {
      id: "8",
      name: "Henry White",
      imagePath: "/avatar.png",
      score: "A",
      percentage: 76.0,
      class: "one",
    },
    {
      id: "9",
      name: "Ivy Turner",
      imagePath: "/avatar.png",
      score: "A",
      percentage: 75.6,
      class: "one",
    },
    {
      id: "10",
      name: "Jack Robinson",
      imagePath: "/avatar.png",
      score: "C",
      percentage: 42.8,
      class: "one",
    },
    {
      id: "11",
      name: "Katie Davis",
      imagePath: "/avatar.png",
      score: " A+",
      percentage: 83.2,
      class: "one",
    },
    {
      id: "12",
      name: "Leo Wilson",
      imagePath: "/avatar.png",
      score: "A+",
      percentage: 89.6,
      class: "one",
    },
    {
      id: "13",
      name: "Mia Johnson",
      imagePath: "/avatar.png",
      score: "A+",
      percentage: 87,
      class: "two",
    },
    {
      id: "14",
      name: "Nathan Brown",
      imagePath: "/avatar.png",
      score: "B+",
      percentage: 40.2,
      class: "two",
    },
    {
      id: "15",
      name: "Olivia White",
      imagePath: "/avatar.png",
      score: "A-",
      percentage: 56.8,
      class: "two",
    },
    {
      id: "16",
      name: "Peter Wilson",
      imagePath: "/avatar.png",
      score: "F",
      percentage: 30.0,
      class: "two",
    },
    {
      id: "17",
      name: "Quinn Turner",
      imagePath: "/avatar.png",
      score: "A",
      percentage: 71.2,
      class: "two",
    },
    {
      id: "18",
      name: "Rachel Lee",
      imagePath: "/avatar.png",
      score: " B",
      percentage: 54.4,
      class: "two",
    },
    {
      id: "19",
      name: "Samuel Brown",
      imagePath: "/avatar.png",
      score: " A-",
      percentage: 64.0,
      class: "two",
    },
    {
      id: "20",
      name: "Tina Robinson",
      imagePath: "/avatar.png",
      score: "A",
      percentage: 74.4,
      class: "two",
    },
    {
      id: "21",
      name: "Ulysses Turner",
      imagePath: "/avatar.png",
      score: "A",
      percentage: 61.6,
      class: "two",
    },
    {
      id: "22",
      name: "Victoria Davis",
      imagePath: "/avatar.png",
      score: "A-",
      percentage: 57.6,
      class: "two",
    },
    {
      id: "23",
      name: "Walter Smith",
      imagePath: "/avatar.png",
      score: "A+",
      percentage: 98.8,
      class: "two",
    },
    {
      id: "24",
      name: "Xena Turner",
      imagePath: "/avatar.png",
      score: "A-",
      percentage: 64.8,
      class: "two",
    },
  ];
  const classOneStudents = studentsProfile.filter(
    (student) => student.class === "one"
  );
  const classTwoStudents = studentsProfile.filter(
    (student) => student.class === "two"
  );
  return (
    <tbody>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          className One
        </td>
      </tr>
      {classOneStudents.map((singleStudent) => {
        return (
          <tr key={singleStudent.id} className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{singleStudent.id}</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={singleStudent.imagePath}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">{singleStudent.name}</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {singleStudent.score}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {singleStudent.percentage}%
            </td>
          </tr>
        );
      })}

      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          className Two
        </td>
      </tr>
      {classTwoStudents.map((singleStudent) => {
        return (
          <tr key={singleStudent.id} className="border-b border-[#7ECEB529]">
            <td className="p-5 text-sm md:text-xl">{singleStudent.id}</td>
            <td className="p-5 text-sm md:text-xl">
              <div className="flex space-x-3 items-center">
                <img
                  className="w-8 h-8"
                  src={singleStudent.imagePath}
                  width="32"
                  height="32"
                  alt="John Smith"
                />
                <span className="whitespace-nowrap">{singleStudent.name}</span>
              </div>
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {singleStudent.score}
            </td>
            <td className="p-5 text-sm md:text-xl text-center">
              {singleStudent.percentage}%
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Rows;
