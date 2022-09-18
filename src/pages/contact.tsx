import { useEffect } from "react";

export default function Contact() {
  console.info(2);
  useEffect(() => {
    console.info(1);
  }, []);
  return (
    <div id="contact">
      <div className="h-96">1</div>
      <div className="h-96">2</div>
      <div className="h-96">3</div>
    </div>
  );
}
