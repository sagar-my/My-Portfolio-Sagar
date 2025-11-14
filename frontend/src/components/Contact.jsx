import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { toast } from '../hooks/use-toast';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-right">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Let's Connect
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  I'm always interested in hearing about new opportunities, collaborations, or just a friendly chat about quality assurance and testing.
                </p>
                
                <div className="space-y-6">
                  <Card className="card-3d p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 font-medium">Email</p>
                        <a href={`mailto:${portfolioData.personal.email}`} className="text-slate-900 hover:text-blue-600 transition-colors">
                          {portfolioData.personal.email}
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="card-3d p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 font-medium">Phone</p>
                        <a href={`tel:${portfolioData.personal.phone}`} className="text-slate-900 hover:text-cyan-600 transition-colors">
                          {portfolioData.personal.phone}
                        </a>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="card-3d p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-600 font-medium">Location</p>
                        <p className="text-slate-900">Kota, Rajasthan, India</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left">
              <Card className="card-3d p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-900">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-900">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-slate-900">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-slate-900">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                      rows={5}
                      className="mt-2 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="magnetic-button w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
