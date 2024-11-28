export type checkType = {
    id: string;
    label: string;
    prompt: string;
}

type checksPromptType = checkType[];

const prompt1 = "I will give you a user comment. Return the answer in Json format: {is_comment_positive: yes/no, satisfaction_rate: 4}"
+ 'Do the followings in order. each number, 1 task needing 1 answer only. After the number, first you see the tag for that question and after semicolon : there is the question.\n'
+ "\n 1- is_comment_positive: Is the user comment positive or negative."
+ "\n 2- satisfaction_rate: what is the satisfactio of the user based on the comment between 0 and 5. 5 is most satisfaction level."

const prompt2 = "I will give you a user comment. Return the answer in Json format: {comment_tone: angry, suggestions: improve quality...}"
+ 'Do the followings in order. each number, 1 task needing 1 answer only. After the number, first you see the tag for that question and after semicolon : there is the question.\n'
+ "\n 1- comment_tone: what is the mood of the person wrote the comment: satisfied, happy, shocked, sad, annoyed , or angry."
+ "\n 2- suggestions: if the satisfaction is not at maximum, what are the suggestions to improve our service."


export function allPrompts () {
    const prompt: checksPromptType = [
        {id: "first_task", label: "First Analysis", prompt: prompt1},
        {id: "second_task", label: "Second Analysis", prompt: prompt2}
    ]

    return prompt;
}


export function checksCount() {
    return allPrompts().length;
}

export function getCheckLabel(part: number) {
    return allPrompts()[part]['label'];
}

export function getCheckId(part: number) {
    return allPrompts()[part]['id'];
}