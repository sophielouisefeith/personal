import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface PasswordPageProps {
  onBack: () => void;
  onAuthenticated: () => void;
}

export default function PasswordPage({ onBack, onAuthenticated }: PasswordPageProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const correctPassword = '24j238762!'; // You can change this to any password you want

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setError('');
      onAuthenticated();
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <div className="space-y-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back to main site</span>
          </button>
          
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h1 className="text-xl">Access CV</h1>
              <p className="text-sm text-gray-600">Please enter the password to view the CV</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
              
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Access CV
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}