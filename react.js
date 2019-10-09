// React
// Frontend framework
// It's quick (vvv)
// New way to approach FE development.
// Separation of concern be damned (in the classic sense)
//      A new way to think ab out S.O.C.
//      Used to do S.O.c by language
//      Now we do it by functionality
// Can support ie9+ with polyfills

// Components :
// HTML/CSS/JS combined by functionality
// They are reusable/re-organizable
// You build components + component trees (Homepage > heading( > title), gallery, gallery)

// Virtual DOM
// It is what makes React so quick + so smooth
// it's the shallow copy of real DOM (it's like a hologram of real DOM, it's not real, React uses it to update real DOM)
//      It has less detail
//      Can be updated much quicker
//      After it's changed, it's compared to a snapshot of the real DOM(living, breathing) and the change is re-rendered
//      1. The entire virtual DOM gets updated by React
//      2. The virtual DOM gets compared to what it looked like before the changes, React figures out what has changed
//      3. Just the updated objects get updated on the real DOM
//      4. Changes on the real DOM make the screen change


// What does the component actually look like?
//  1. Functional component
//          - functional because they are basically functions
//          - stateless because they do not hold/manage state
//          - presentational because all they do is output UI elements
//  2. Class component
//          - Class because they are basically classes
//          - Smart because they can contain logic
//          - Stateful because they can hold and/or manage local state
//          - They are considered containers because they usually hold/contain other components



