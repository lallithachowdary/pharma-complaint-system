import ComplaintForm from "../components/ComplaintForm";
import UploadPanel from "../components/UploadPanel";

const Complaint = () => {
  return (
    <div className="complaint-page">
      <div className="left">
        <ComplaintForm />
      </div>

      <div className="right">
        <UploadPanel />
      </div>
    </div>
  );
};

export default Complaint;