'use client';
import DonutChart from '@/components/donut-chart';
import { getCheckLabel } from '@/prompts/sample_prompt';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { CheckCheck, CircleX, Award, Apple, Laugh, Smile, Meh, Frown, Annoyed, Angry } from 'lucide-react';

import { sampleResult } from '@/samples/sample-result';
import { useState } from 'react';
import { capitalizeWord } from '@/lib/utils';
  
const ResultBoard: React.FC<any> = ({analysisResult}) => {
    if (process.env.NEXT_PUBLIC_NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_TEST_DATA === 'yes') {
        analysisResult = sampleResult();
    }
    console.log(analysisResult);

    const toneToIcon = (tone: string) => {
        switch(tone) {
            case 'satisfied': return <Laugh />;
            case 'happy': return <Smile />;
            case 'shocked': return <Meh />;
            case 'sad': return <Frown />;
            case 'annoyed': return <Annoyed />;
            case 'angry': return <Angry />;

            default: return '';
        }
    }

    return (
        <div>
            {analysisResult?.first_task ?
                <Card className="my-6">
                    <CardHeader>
                        <CardTitle>{analysisResult?.first_task?.label!}</CardTitle>
                    </CardHeader>
                        <CardContent>
                            <div className="flex flex-row justify-between">
                                <div>
                                {analysisResult?.first_task?.is_comment_positive ?
                                    <div className="flex flex-row gap-4">
                                        <p>{analysisResult?.first_task?.is_comment_positive === 'yes' ? (<CheckCheck />) : (<CircleX />) }</p>
                                        <p>The comment is {analysisResult?.first_task?.is_comment_positive === 'yes' ? 'posivitve' : 'negative' }</p>
                                    </div>
                                :
                                    ''
                                }

                                {analysisResult?.first_task?.satisfaction_rate ?
                                    <div className="flex flex-row gap-4">
                                        <p><Award /></p>
                                        <p>The given rate is {analysisResult?.first_task?.satisfaction_rate} out of 5</p>
                                    </div>
                                :
                                    ''
                                }
                                </div>
                                <div>
                                    {analysisResult?.first_task?.satisfaction_rate ?
                                    <div className="w-[180px]">
                                        <DonutChart value={analysisResult?.first_task?.satisfaction_rate*2} label={'Satisfaction Rate'}/>
                                    </div>
                                :
                                    ''
                                    }
                                </div>
                            </div>

                        </CardContent> 
                </Card>
                :
                ''
            }
            {analysisResult?.second_task ?
                <Card className="mt-6 mb-6">
                    <CardHeader>
                        <CardTitle>{analysisResult?.second_task?.label!}</CardTitle>
                    </CardHeader>
                        <CardContent>
                            {analysisResult?.second_task?.comment_tone ?
                                <div className="flex flex-row gap-4">
                                    <p>
                                        {toneToIcon(analysisResult?.second_task?.comment_tone)}
                                    </p>
                                    <p>The user is {analysisResult?.second_task?.comment_tone}</p>
                                </div>
                            :
                                ''
                            }

                            {analysisResult?.second_task?.suggestions ?
                                <div className="flex flex-row gap-4">
                                    <p><Apple /></p>
                                    <p>Suggestions: {analysisResult?.second_task?.suggestions} </p>
                                </div>
                            :
                                ''
                            }
                        </CardContent> 
                </Card>
                :
                ''
            }
        </div>
    )
}

export default ResultBoard;