import Icon from "@/components/ui/icon";

const FloatingContacts = () => {
  const contacts = [
    {
      name: "WhatsApp",
      icon: "MessageCircle",
      href: "https://wa.me/79202957177",
      color: "bg-[#25D366] hover:bg-[#20BA5A]"
    },
    {
      name: "Telegram",
      icon: "Send",
      href: "https://t.me/+79202957177",
      color: "bg-[#0088cc] hover:bg-[#006699]"
    },
    {
      name: "Email",
      icon: "Mail",
      href: "mailto:shelltechabx@yandex.ru",
      color: "bg-secondary hover:bg-secondary/90"
    },
    {
      name: "Phone",
      icon: "Phone",
      href: "tel:+79202957177",
      color: "bg-primary hover:bg-primary/90"
    }
  ];

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.href}
          target={contact.name !== "Phone" ? "_blank" : undefined}
          rel={contact.name !== "Phone" ? "noopener noreferrer" : undefined}
          className={`${contact.color} text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group`}
          title={contact.name}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <Icon name={contact.icon as any} size={24} className="group-hover:scale-110 transition-transform" />
        </a>
      ))}
    </div>
  );
};

export default FloatingContacts;
