# Front End Designs and Functions

ChargeNet Stations builds solar-powered electric vehicle charging stations at fast food restaurants. Our mission is to accelerate the transition to green energy and combat climate change. We aim to provide users with a clean and intuitive experience. The purpose of this assignment is to prove you have a good handle on the basics in react-native.

Topics you should be familiar with:

- data transformation
- high order arrays
- react navigation
- StyleSheet for styling components
- typescript

We expect it to take about 30 minutes to an hour to complete. We want to be respectful of your time, so please feel free to submit a partial solution rather than spend much longer than that!

### Included Files:

you are provided with two complete files:

1. `sample_vehicle_data.json`
   - this is the pretend data used in the assignment below
2. `Accordian.js`
   - this exports an 'AccordianSingleSelect' component you will also use below.

# Goals for you assignment (complete as many as possible)

## TASK 1: transform data

inside of `MyCars.tsx` add the component AccordianSingleSelect found in the components folder. Simply place it inside of the 'View' tags.

in order to make AccordianSingleSelect work you will need to pass in an array of objects into its 'data' prop. The 'stateControl' prop is a callback that sets state. Finally the 'defaultEmpty' prop is simply the initial text shown in the drop down accordian. (if it helps please look at Accordian.js to try and understand how it works)

**! the shape of the passed in data is crucial to this working !**
every item in the array you pass to the data prop MUST match the following:

```
{
    id: <sample_vehicle_data.json already has this for you>,
    name: <use 'model' provided from sample_vehicle_data.json for this>
    selected: <boolean set to false for initial render>
}
```

## TASK 2: styling

1. choose 2 icons to represent the 'Home' button and 'My Cars' button for the bottom tabs. You can choose whatever you find is a good fit from this web page:
   [expo icons](https://icons.expo.fyi/)

   - Add your chosen icons in the `ScreenConsolidation.tsx` file.
   - Pass in color to the icon to let a user know which is active or inactive.

2. Like css let's make a central file that controls the majority our styling. Inside of `AppStyles.ts` add some styles that accomplish the following
   - assign a white background to all the screens
   - centers items on all pages both horizontally and vertically
   - you will need to apply whatever styles you have here to the other screens yourself. Consider the purpose of the styles and name as you see fit.

## Task 3: bonus

make as many tests as you can that make sense to add. Ideally we like to follow test driven development, but given the situation we are prioritizing your ability to prove the fundamentals of react-native/javascript. There are no penalties for not finishing this bonus.

# Your Submission:

please email us a .zip file with the source code for your program. **Please make sure not to send node_modules!** We will npm install then npm start on our end to begin reviewing your submission.
"# frontend_takehome" 
