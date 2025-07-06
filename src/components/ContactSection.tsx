import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section
      data-theme="light"
      id="contact"
      className="bg-gray-100 text-black py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-8">Зв'язатись з нами</h2>
          <ContactForm />
        </div>

        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Місцезнаходження"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2329.596634263222!2d30.618659728480996!3d46.410265352477836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7cd00094cf967%3A0x556decd47d0c306e!2z0JrQvtGC0LXQtNC20L3QtSDQvNGW0YHRgtC10YfQutC-ICLQm9C40L_QvtCy0LjQuSDQk9Cw0Lki!5e0!3m2!1sru!2sua!4v1749213748405!5m2!1sru!2sua"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
