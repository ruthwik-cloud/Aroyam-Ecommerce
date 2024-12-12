import { CustomerData } from '../types';

const CUSTOMERS_KEY = 'arogam_customers';

const getStoredCustomers = (): CustomerData[] => {
  const stored = localStorage.getItem(CUSTOMERS_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveCustomers = (customers: CustomerData[]) => {
  localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(customers));
};

export const initDatabase = async () => {
  // Initialize empty customers array if it doesn't exist
  if (!localStorage.getItem(CUSTOMERS_KEY)) {
    saveCustomers([]);
  }
};

export const createCustomer = async (customerData: CustomerData) => {
  const customers = getStoredCustomers();
  
  // Check if email already exists
  if (customers.some(c => c.email === customerData.email)) {
    throw new Error('Email already exists');
  }
  
  const newCustomer = {
    ...customerData,
    id: Date.now().toString()
  };
  
  customers.push(newCustomer);
  saveCustomers(customers);
  
  return newCustomer.id;
};

export const getCustomerByEmail = async (email: string) => {
  const customers = getStoredCustomers();
  return customers.find(c => c.email === email) || null;
};

export const updateCustomer = async (id: string, data: Partial<CustomerData>) => {
  const customers = getStoredCustomers();
  const index = customers.findIndex(c => c.id === id);
  
  if (index !== -1) {
    customers[index] = { ...customers[index], ...data };
    saveCustomers(customers);
  }
};