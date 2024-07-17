// import { FormEvent, useState } from "react";

// export default function ContactForm() {
//     const [formData, setFormData] = useState({
//         "first-name": "",
//         email: "",
//         comments: ""
//     });

//     const [submitStatus, setSubmitStatus] = useState<string | null>(null);

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = event.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         setSubmitStatus("Submitting...");

//         try {
//             const response = await fetch("/", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/x-www-form-urlencoded" },
//                 body: encode({ "form-name": "contact", ...formData })
//             });

//             if (response.ok) {
//                 setSubmitStatus("Form submitted successfully!");
//                 setFormData({ "first-name": "", email: "", comments: "" });
//             } else {
//                 throw new Error("Form submission failed");
//             }
//         } catch (error) {
//             console.error("Error submitting form:", error);
//             setSubmitStatus("Form submission failed. Please try again.");
//         }
//     };

//     const encode = (data: { [key: string]: string }) => {
//         return Object.keys(data)
//             .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//             .join("&");
//     };

//     return (
//         <div>
//             <form 
//                 name="contact" 
//                 method="post" 
//                 data-netlify="true" 
//                 data-netlify-honeypot="bot-field" 
//                 onSubmit={handleSubmit}
//             >
//                 <input type="hidden" name="form-name" value="contact" />
//                 <div hidden>
//                     <input name="bot-field" />
//                 </div>
//                 <div>
//                     <label>First name <br />
//                         <input 
//                             type="text" 
//                             name="first-name" 
//                             value={formData["first-name"]}
//                             onChange={handleChange}
//                         />
//                     </label>
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email</label> <br />
//                     <input 
//                         id="email" 
//                         type="email" 
//                         name="email" 
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label> Any comments? <br />
//                         <textarea 
//                             name="comments"
//                             value={formData.comments}
//                             onChange={handleChange}
//                         ></textarea>
//                     </label>
//                 </div>
//                 <button type="submit">Send</button>
//             </form>
//             {submitStatus && <p>{submitStatus}</p>}
//         </div>
//     );
// }