import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const LeadCaptureModal = ({ open, onOpenChange }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);
    // Mock submission — persist to localStorage so user can see it works
    setTimeout(() => {
      const leads = JSON.parse(localStorage.getItem('accredian_leads') || '[]');
      leads.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem('accredian_leads', JSON.stringify(leads));
      setLoading(false);
      setSubmitted(true);
      toast.success('Enquiry submitted successfully!');
    }, 900);
  };

  const reset = () => {
    setForm({ name: '', email: '', company: '', teamSize: '', message: '' });
    setSubmitted(false);
  };

  const handleOpenChange = (o) => {
    if (!o) {
      setTimeout(reset, 200);
    }
    onOpenChange(o);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg">
        {submitted ? (
          <div className="text-center py-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="text-green-600" size={36} />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
              Thank you!
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Our team will reach out to you within 24 hours.
            </p>
            <Button
              onClick={() => handleOpenChange(false)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Let's Talk About Your{' '}
                <span className="text-blue-600">Training Needs</span>
              </DialogTitle>
              <DialogDescription>
                Fill the form and our team will connect within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Jane Doe"
                  className="mt-1.5"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Work Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="jane@company.com"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    value={form.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Acme Corp"
                    className="mt-1.5"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="teamSize">Team Size</Label>
                <Select
                  value={form.teamSize}
                  onValueChange={(v) => handleChange('teamSize', v)}
                >
                  <SelectTrigger id="teamSize" className="mt-1.5">
                    <SelectValue placeholder="Select team size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1 – 10</SelectItem>
                    <SelectItem value="11-50">11 – 50</SelectItem>
                    <SelectItem value="51-200">51 – 200</SelectItem>
                    <SelectItem value="201-1000">201 – 1000</SelectItem>
                    <SelectItem value="1000+">1000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Tell us about your training needs</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="e.g. We need leadership training for 40 managers..."
                  className="mt-1.5 resize-none"
                  rows={3}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-11 font-medium"
              >
                {loading ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                Your data is stored locally (mock submission for demo).
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
