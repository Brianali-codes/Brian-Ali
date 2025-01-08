import { motion } from "framer-motion";


export default function Contacts() {
    return (
        <motion.div id="Services" className="h-fit bg-white flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 50 }} // Starting position
            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
            transition={{ duration: 1 }} // Transition duration
            viewport={{ once: true }} // Animation happens only once when it comes into view
        >
            <div className="flex flex-col mt-10 justify-center items-center p-10" id="FormPc">
                <br />
                <div className="flex flex-row justify-center items-center">
                    <p className="paragraph text-3xl Desc">
                        CONTACT <span className="text-cyan-400 text-3xl">ME</span>
                    </p>
                </div>
                <br /><br />
                <form
                    action="https://formsubmit.co/brianali427@gmail.com"
                    method="POST"
                    className="flex flex-col gap-4 Desc"
                    id="form-main"
                >
                    <div className="flex flex-row gap-5" id="forms">
                        <input
                            placeholder="Name..."
                            type="text"
                            name="name"
                            required
                            className="h-28 w-72 border-solid border-2 border-black rounded-xl p-1 Desc"
                        />
                        <input
                            placeholder="Email..."
                            type="email"
                            name="email"
                            required
                            className="h-28 w-72 border-solid border-2 border-black rounded-xl p-1 Desc"
                        />
                    </div>
                    <div className="flex flex-row gap-5" id="form2">
                        <input
                            placeholder="Message..."
                            type="text"
                            name="msg"
                            required
                            className="h-36 w-96 border-solid border-2 border-black rounded-xl p-1 Desc"
                        />
                        <button
                            type="submit"
                            className="Desc h-36 w-48 border-solid border-2 border-black rounded-xl hover:bg-slate-400"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
            
            {/* Mobile form */}
            <div className="hidden flex-col justify-center items-center" id="form-mobile">
                <form
                    action="https://formsubmit.co/brianali427@gmail.com"
                    method="POST"
                    className="flex flex-col gap-4"
                >
                    <input
                        placeholder="Your Name"
                        type="text"
                        name="name"
                        required
                        className="h-12 w-fit border-solid border-2 border-black rounded-xl p-1"
                    />
                    <input
                        placeholder="Your Email"
                        type="email"
                        name="email"
                        required
                        className="h-12 w-fit border-solid border-2 border-black rounded-xl p-1"
                    />
                    <input
                        placeholder="Message"
                        type="text"
                        name="msg"
                        required
                        className="h-24 w-fit border-solid border-2 border-black rounded-xl p-1"
                    />
                    <button
                        type="submit"
                        className="h-10 w-fit border-solid border-2 border-black rounded-xl hover:bg-slate-400 p-2"
                    >
                        Send
                    </button>
                </form>
            </div>
        </motion.div>
    );
}
