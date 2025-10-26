import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5050/api/services/${id}`)
      .then(res => setService(res.data))
      .catch(() => setService(null));
  }, [id]);

  if (!service) return <p>Loading or Service not found...</p>;

  return (
    <div style={{ maxWidth: 650, margin: "3rem auto" }}>
      <div
        style={{
          background: "white",
          padding: "2rem 2.6rem",
          borderRadius: "10px 100px / 120px",
          border: "2px solid #2077b5",
          boxShadow: "0 4px 24px rgba(32,119,181,0.13)"
        }}
      >
        <h1 style={{ color: "#222", marginBottom: 8 }}>{service.title}</h1>
        <div
          style={{
            color: "#2077b5",
            fontWeight: 700,
            marginBottom: 16,
            fontSize: "1.15rem"
          }}
        >
          {service.category}
        </div>
        <p style={{ fontSize: "1.13rem", color: "#222" }}>
          {service.description}
        </p>
      </div>
    </div>
  );
}
