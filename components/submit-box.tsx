"use client";
import { useState } from 'react';

import { Button } from "@/components/ui/analyze-button"
import { Textarea } from "@/components/ui/input-textarea"
import AnimatedSpin from "@/components/ui/animated-spin"

import { checksCount, getCheckLabel, getCheckId } from '@/prompts/sample_prompt';
import { getGroupCheckResponse } from '@/server_actions/analysis-actions';

const SubmitBox: React.FC<any> = ({setAnalysisResult}) => {
    const [loading, setLoading] = useState(false);
    const [userCode, setUserCode] = useState<string>('');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [currentGroupCheck, setCurrentGroupCheck] = useState("");
    
    const handleAnalyze = async () => {
        if (!userCode.trim()) {
          alert("Please enter some text before submitting.");
          return;
        }
        setLoading(true);
        await analysisProcesses();
        setLoading(false);
    };

    // Main analysis happens here.
    const analysisProcesses = async () => {
        for (let part=0; part < checksCount(); part++) {
            setCurrentGroupCheck(getCheckLabel(part));
            const groupResult = await getGroupCheckResponse(userCode, part);
            const parsedDataScores = JSON.parse(groupResult);
            const parsedDataScoresWithLabel = {...parsedDataScores, label:getCheckLabel(part)}
            setAnalysisResult((prevState:any)  => ({
                ...prevState,
                [getCheckId(part)]:parsedDataScoresWithLabel
            }));
        }

        return true;
    }

    return (
        <div className="grid w-full gap-2">
            <Textarea 
                className="resize-none" 
                placeholder="Enter your (...)" 
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
            />

            <Button
                onClick={handleAnalyze}
                variant={isInputFocused ? "default" : "gradient"}
            >
                {isInputFocused ? (
                 'Done with editing'
                ) : (
                    loading ? (
                    <div className="flex flex-row items-center gap-2"> 
                        <AnimatedSpin />
                        <span>Checking {currentGroupCheck}...</span>
                    </div>
                    ) : (
                        "Analyze!"
                    )
                )}
            </Button>
        </div>
    )
}

export default SubmitBox;