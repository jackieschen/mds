# Dialogs
## Overview
A dialog is a “conversation” between the system and the user. They are best used for short tasks or to alert the user of relevant information. Dialogs are triggered by a user’s action and are persistent until dismissed. They usually sit centered on the page, on top of a semi-transparent layer. The page content below is thus disabled and forces the user to interact with the dialog.

## Types
**Simple Dialog**
These dialogs have a fixed width and height. Ideal for descriptions that are 1-2 lines long.
**Variable Dialog**
These dialogs will hug its content so height is variable. Use these if dialogs will contain input fields or a description that is longer than two lines

## When to use
- Use to focus the user’s attention.
- Use for short task completion.
- Use to gather quick input from the user.
- Use to display relevant information like alerts or confirmations.

## When not to use
- Don’t use if the content is unrelated to the current workflow.
- Don’t use to display complex or large amounts of data.
- Don’t recreate a full app or page in a dialog.
- Don’t use when the user hasn’t triggered the dialog.

## Rules
**Background**
Since we want the user to focus on the dialog, use a semi-transparent background to disable any other page elements. 

**Size**
Dialogs should be 460 px wide

**Header**
Use a header to quickly describe the task. Headers should be single lines. Try to avoid two line headers if possible. 

**Descriptions or input fields**
Dialogs should be short and to the point. Try to keep descriptions to 2 lines. If more text is needed, consider using a modal instead. 

Dialogs can also contain simple input fields or dropdowns. When the dialog is triggered, the first interactive component should use the focus state. 

**Primary Action Button**
Dialogs should always have a clear primary action button. A secondary button can be used to dismiss or cancel the dialog.

## Best Practices
**Use dialogs sparingly**
Don’t overuse dialogs. They are disruptive and can easily annoy the user if used incorrectly or too frequently. 

**Keep dialog tasks simple and focused**
Dialog tasks should be direct and easy to complete. Avoid feature creep in dialogs where a once simple dialog has become bloated with interactions. 
 
