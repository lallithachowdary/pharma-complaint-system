import ComplaintCard from "../components/ComplaintCard";

function ComplaintList() {

  const complaints = [
    {
      customer_name: "ABC Pharma",
      product_name: "Paracetamol",
      batch_number: "B001",
      complaint: "Broken tablets",
      status: "Open"
    }
  ];

  return (
    <>
      {complaints.map((c, index) => (
        <ComplaintCard
          key={index}
          complaint={c}
        />
      ))}
    </>
  );
}

export default ComplaintList;