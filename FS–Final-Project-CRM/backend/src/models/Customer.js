const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Customer name is required'],
      trim: true,
      minlength: [2, 'Customer name must be at least 2 characters']
    },
    email: {
      type: String,
      required: [true, 'Customer email is required'],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      minlength: [6, 'Phone number is too short']
    },
    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true
    },
    status: {
      type: String,
      enum: ['Lead', 'Active', 'Inactive'],
      default: 'Lead'
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Medium'
    },
    value: {
      type: Number,
      required: [true, 'Customer value is required'],
      min: [0, 'Customer value cannot be negative']
    },
    source: {
      type: String,
      trim: true,
      default: 'Website'
    },
    nextFollowUp: {
      type: Date
    },
    tags: [{
      type: String,
      trim: true
    }],
    notes: {
      type: String,
      trim: true,
      maxlength: [900, 'Notes cannot exceed 900 characters']
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

customerSchema.index({ name: 'text', company: 'text', email: 'text', source: 'text', tags: 'text' });

module.exports = mongoose.model('Customer', customerSchema);
