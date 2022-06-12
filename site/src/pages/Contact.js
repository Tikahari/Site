import React from 'react'

const Contact = () => {
    return (
        <div class="contact container">
            <h1 class="head"><b>Contact</b></h1>
            <form class="my-form" id="reused_form">
                <div class="container">
                    <div class="contact-head-contain">
                        <h5 class="contact-head">Linkedin: https://www.linkedin.com/in/tikahari-khanal/</h5>
                        <h5 class="contact-head">Github: https://github.com/Tikahari</h5>
                        <h5 class="contact-head">Email: tikaharik@gmail.com</h5>
                    </div>
                    <ul>
                        <li>
                            <select name="purpose">
                                <option selected disabled>-- Please choose an option --</option>
                                <option>Opportunity</option>
                                <option>Project</option>
                                <option>Other Contingency</option>
                            </select>
                        </li>
                        <li>
                            <div class="grid grid-2">
                                <input type="text" name="firstname" placeholder="Name" required />
                                <input type="text" name="lastname" placeholder="Surname" required />
                            </div>
                        </li>
                        <li>
                            <div class="grid grid-2">
                                <input type="email" name="email" placeholder="Email" required />
                                <input type="tel" name="phone" placeholder="Phone" />
                            </div>
                        </li>
                        <li>
                            <textarea name="message" placeholder="Message"></textarea>
                        </li>
                        <li>
                            <div class="grid grid-3">
                                <input type="submit" value="Submit" />
                                <input type="reset" value="Reset" />
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        </div>

    )
};

export default Contact