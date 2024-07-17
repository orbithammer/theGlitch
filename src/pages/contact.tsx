import { FormEvent } from "react";

export default function ContactForm() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted");
    };

    return(
        <div>
            <form name="contact v1" method="post" data-netlifiy="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact v1"/>
                <div>
                    <label>First name <br />
                        <input type="text" name="first-name" />
                    </label>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}