import React, { useEffect, useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { handleIsUserEdit, handleIsUserModalOpen, handleSetUserCurrIndex } from '../../redux/slices/misc';

const UserModal = ({ users, onCreate, onEdit }) => {
  const { isUserEdit, userCurrIndex: index } = useSelector((state) => state.misc);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    status: ''
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUserEdit && users[index]) {
      setFormData({
        ...users[index],
        role: users[index].role.toLowerCase()
      });
    }
  }, [isUserEdit, users, index]);

  const handleCloseModal = () => {
    dispatch(handleIsUserModalOpen(false));
    setFormData({ name: '', email: '', role: '', status: '' });
    dispatch(handleSetUserCurrIndex(-1));
    dispatch(handleIsUserEdit(false));
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    onEdit({ id: index, ...formData });
    handleCloseModal();
  };

  const handleOnCreateUser = (e) => {
    e.preventDefault();
    onCreate(formData);
    handleCloseModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const InputField = ({ label, type, name, placeholder, required = true }) => (
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1.5">{label}</label>
      <input
        type={type}
        className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none 
                   transition-all duration-200 hover:border-gray-300"
        placeholder={placeholder}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
      />
    </div>
  );

  const SelectField = ({ label, name, options }) => (
    <div className="relative">
      <label className="block text-xs font-medium text-gray-700 mb-1.5">{label}</label>
      <select
        className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm 
                   text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                   outline-none transition-all duration-200 appearance-none bg-white pr-10
                   hover:border-gray-300"
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-[34px] pointer-events-none">
        <ChevronDown size={16} className="text-gray-400" />
      </div>
    </div>
  );

  const statusOptions = [
    { value: 'Active', label: 'Active' },
    { value: 'Inactive', label: 'Inactive' }
  ];

  const roleOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
    { value: 'editor', label: 'Editor' },
    { value: 'manager', label: 'Manager' }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 ">
      <div className="bg-white p-7 rounded-2xl shadow-xl w-[28rem] border border-gray-100 
                    animate-[fadeIn_0.2s_ease-in-out]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            {isUserEdit ? 'Edit User' : 'Create New User'}
          </h2>
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg
                       hover:bg-gray-100"
            onClick={handleCloseModal}
          >
            <X size={18} />
          </button>
        </div>

        <form className="space-y-5" onSubmit={isUserEdit ? handleEditUser : handleOnCreateUser}>
          <InputField
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter user name"
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter email"
          />

          <SelectField
            label="Status"
            name="status"
            options={statusOptions}
          />

          <SelectField
            label="Role"
            name="role"
            options={roleOptions}
          />

          <div className="flex justify-end space-x-3 pt-3">
            <button
              type="button"
              className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 
                         rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2.5 text-sm font-medium text-white bg-blue-600 
                         rounded-lg hover:bg-blue-700 transition-colors duration-200 
                         shadow-sm"
            >
              {isUserEdit ? 'Update' : 'Create User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
