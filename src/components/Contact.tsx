
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative z-50 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 brutalist-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tighter">
            TRAVAILLONS ENSEMBLE
          </h2>


          <p className="text-xl md:text-2xl text-gray-200 font-bold max-w-4xl mx-auto">
            Que vous construisiez un <span className="text-yellow-400 font-black">NOUVEAU PRODUIT</span> ou que vous amélioriez un
            <span className="text-pink-500 font-black"> PRODUIT EXISTANT</span>, je serais ravi d’échanger avec vous. Contactez-moi et donnons vie à vos idées.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Coordonnées</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-400  flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">contacts@samuel-ngombi-portfolio.fr
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400  flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Téléphone</p>
                  <p className="text-gray-300">+33 758113166</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-400  flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Localisation</p>
                  <p className="text-gray-300">Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400 text-black p-8 border-4 border-black">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold uppercase mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-yellow-100 border-2 font-black mb-8  border-black text-black font-mono placeholder-black"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-yellow-100 border-2 font-black mb-8  border-black text-black font-mono placeholder-black"
                    placeholder="vous@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold uppercase mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-yellow-100 border-2 font-black mb-8  border-black text-black font-mono placeholder-black"
                  placeholder="Parlons de votre prochain projet"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-yellow-100 border-2 font-black mb-8  border-black text-black font-mono placeholder-black resize-none"
                  placeholder="Parlez-moi un peu de votre projet, vos objectifs ou votre idée..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-black text-yellow-300 border-2 border-black font-bold uppercase hover:bg-yellow-300 hover:text-black transition-none"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
};
