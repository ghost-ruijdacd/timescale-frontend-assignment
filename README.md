# Timescale Frontend Programming Assignment

Thank you for taking the time to apply for a frontend position at Timescale!
We hope you'll enjoy this small coding assignment that was designed to illustrate your coding skills. It should take around
3 hours to complete at a time of your choosing. If you have any questions, feel free to reach out to us and we'll be happy
to help. Happy hacking!

## Assignment

Implement a React component that allows managing email addresses. The component displays two lists: available recipients and selected recipients.

<img src="./src/assets/wireframe.png" height="50%" width="50%" />

Use the included `recipientsData.json` file to populate the lists within the component.

### Use cases

As a user, I can

- See the list of all available recipients. A recipient is either an email or a group of emails sharing the same company domain
- Select an individual recipient or a company domain. When a company domain is selected, all emails with the domain are added to the selected recipients' list
- Enter the name of a company into the autocomplete and select a recipient from the available suggestions
- Enter any email in the autocomplete. If the email passes validation it is possible to add it to the list of available recipients
- See the list of the selected recipients that are grouped into company and email recipients. The groups are expandable and show the contained members
- Remove the recipients from the selected list. It is possible to remove an individual email or all emails sharing a domain at once

### The rules

- The component should have a simple and clean design
- You can use a component library of your choice (we use Chakra UI)
- The component should work in the latest Chrome on Mac OS
- We don't expect a full test coverage, but a couple of unit tests would be nice to have
- Fork the repo to your own account, make it public and send us the repo url when you are completed. We will
  clone and run the site on our local.

## Explanation

As for the assignment, I tried my best to keep the time to completion as close to the 3 hours as possible and I was able to complete the requirements of the assignment with the exception of the following criteria:

> Enter any email in the autocomplete. If the email passes validation it is possible to add it to the list of available recipients

### State management

I have written the state management logic using `useState` as the application's state is simple and does not require a more complex state management solution, such as Zustand, Redux or others.

The entire state is stored in a single `recipients` array. Each element in the array represents a recipient. The `isSelected` property is used to indicate whether a recipient is selected or not.

I considered a different API for storing the state, but decided to stick with the simpler approach of using `useState` for simplicity.

The recipients data is imported directly from the `recipientsData.json` file, but if the data source was external (API), then the loading of the data would be handled diferently, using TanStack Query or `useEffect` hooks, with a preference for TanStack Query as it provides a more flexible and powerful API, without the footguns of `useEffect`.

### Validation

For the validation logic, I have used the `zod` library as it provides out-of-the-box validation for the email address format.

### Testing

I have written a few test suites to cover the core functionality of the application.

### Component libraries

I have used `@ark-ui/react` as the component library for the application. The library provides a `Combobox` component that would be useful for the autocomplete functionality. For the grouping by domain functionality, I have used the `Collapsible` component from the library.

### Styling

I followed the setup that was initially provided in the template and used plain CSS for styling.

I also included a simple `reset.css` file to remove the default styling from the user agent.
