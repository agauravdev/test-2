import { type } from "@testing-library/user-event/dist/type";

// ek baar question wapis repeat krke confirm kar na

// consistency in naming is the 1st like we discussed
// we can have more validation functions

export const formConfig = [
  {
    type: "text",
    name: "textInput",
    label: "Text Input",
    placeholder: "Enter text",
    defaultValue: "",
    required: true,
    validation: {
      minLength: 3,
      maxLength: 10,
    },
  },
  {
    type: "multi",
    name: "personName",
    label: "Text Input",
    placeholder: "Enter text",
    defaultValue: "",
    required: true,
    // "yes. it would be a recursive solution"
    fields: [
      {
        type: "select",
        name: 'prefix',
        label: "Prefix",
        options: [
          {
            label: "Mr.",
            value: "Mr.",
          },
          {
            label: "Miss",
            value: "Miss",
          },
          {
            label: "Mrs.",
            value: "Mrs.",
          },
        ],
        defaultValue: "",
        required: true,
      },
      {
        type: "text",
        name: "firstName",
        label: "First Name",
        placeholder: "Enter your Name",
        defaultValue: "",
        required: true,
        validation: {
          minLength: 0,
          maxLength: 100,
        },
      },
    ],
    validation: {
      minLength: 3,
      maxLength: 10,
    },
  },
    // ek baar text se chala ke dekh le
    // because wahan number pe typecast
    // kar rahe hai
  {
    type: "text",
    name: "numberInput",
    label: "Number Input",
    placeholder: "Enter a number",
    defaultValue: "",
    required: true,
    validation: {
      min: 0,
      max: 100,
    },
  },
  {
    type: "text",
    name: "textInput",
    rule: {
      key: 'numberInput',
      condition: '>',
      value: 50,
    },
    label: "Text Input ( Conditional )",
    placeholder: "Enter text",
    defaultValue: "",
    required: true,
    validation: {
      minLength: 3,
      maxLength: 10,
    },
  },
  {
    type: "checkbox",
    name: "singleCheckbox",
    label: "Single Checkbox",
    checked: false,
    required: true,
  },
  // {
  //   type: "chips",
  //   name: "multiSelectChips",
  //   label: "Color",
  //   options: [
  //     {
  //       label: "green",
  //       id: "1",
  //     },
  //     {
  //       label: "red",
  //       id: "2",
  //     },
  //     {
  //       label: "blue",
  //       id: "3",
  //     },
  //     {
  //       label: "pink",
  //       id: "4",
  //     },
  //   ],
  //   required: true,
  // },
  {
    type: "checkbox",
    name: "hobbies",
    label: "Hobbies",
    required: true,
    options: [
      {
        label: "Coding",
        value: "coding",
        checked: false,
      },
      {
        label: "Sports",
        value: "sports",
        checked: false,
      },
      {
        label: "Reading",
        value: "Reading",
        checked: false,
      },
    ],
  },

  {
    type: "select",
    rule: {
      key: "hobbies",
      condition: 'includes', // includes will be used
      // for arrays and checkboxes
      value: "coding",
    },

    name: "domain",
    label: "domain",
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
      {
        label: "Option 3",
        value: "option3",
      },
    ],
    defaultValue: {
      default: 'option2',
      rule: {
        key: "hobbies",
        condition: 'includes', // includes will be used
        // for arrays and checkboxes
        value: "coding",
      }
    }, // we can make it an array too, if we want to.
    // so we can put multiple conditions
    required: true,
  },
  {
    type: "select",
    visible: false,
    rule: {
      key: "domain",
      value: "option1",
    },
    name: "stack",
    label: "stack",
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
      {
        label: "Option 3",
        value: "option3",
      },
    ],
    defaultValue: "",
    required: true,
  },
  {
    type: "select",
    visible: true,

    name: "dropdown",
    label: "Dropdown",
    options: [
      {
        label: "Option 1",
        value: "option1",
      },
      {
        label: "Option 2",
        value: "option2",
      },
      {
        label: "Option 3",
        value: "option3",
      },
    ],
    defaultValue: "",
    required: true,
  },
];
