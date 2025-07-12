export default function Contact () {
    return(
        <section
            id="contact"
            className="flex items-center justify-center min-h-[50vh] py-12 px-5 bg-gradient-to-br from-emerald-900 via-fuchsia-900 to-blue-900"
        >
            <div className="flex flex-col items-center justify-center w-full max-w-2xl text-white py-10">
                <h1 className="text-3xl md:text-4xl font-bold underline decoration-emerald-400 decoration-4 mb-6 transition-colors duration-300 hover:text-emerald-300">
                    Contact
                </h1>
                <p className="text-center text-lg text-fuchsia-200 mb-6">
                    If you want to discuss more in detail, you can contact here
                </p>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl px-10 py-8 flex flex-col gap-4 items-center w-full max-w-md">
                    <a
  onClick={(e) => {
    e.preventDefault();
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=vijaykarthikeyanu77@gmail.com',
      'GmailComposeWindow',
      'width=800,height=600'
    );
  }}
  href="#"
  className="transition-colors duration-200 hover:text-emerald-300 cursor-pointer"
  title="Contact via Gmail"
>
                        <span className="font-bold text-fuchsia-300">Email:</span> vijaykarthikeyanu77@gmail.com
                    </a>
                    <p className="transition-colors duration-200 hover:text-emerald-300 cursor-pointer"
                        title="Click to copy"
                        onClick={() => navigator.clipboard.writeText('+91 9345441658')}
                    >
                        <span className="font-bold text-fuchsia-300">Phone:</span> +91 9345441658
                    </p>
                </div>
            </div>
        </section>
    );
}