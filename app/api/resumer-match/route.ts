import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic()

export async function POST(request: Request) {
    try{
        const { resume, jobDescription } = await request.json()

        if (!resume || !jobDescription) {
            return   Response.json({ error: 'Resume and job description are required' }, { status: 400 })
        }
        const message = await client.messages.create({
            model: 'claude-haiku-4-5',
            max_tokens:1024,
            messages:[{
                
                    role:'user',
                    content: `You are a professional resume reviewer. Analyze how well this resume match the job description. 
                    
                    Resume: ${resume}

                    Job Description: ${jobDescription}
                    
                    Response in JSON format only:
                    {
                    "matchScore": <number 0-100>,
                    "matchingSkills": [<list of skills that match the job description>],
                    "missingSkills": [<list of skills that are required by the job description but not mentioned in the resume>],
                    "summary": <a brief summary of how well the resume matches the job description>
            }`
                }]
 
            
        })
        const content = message.content[0]
        if (content.type !== 'text') throw new Error('Unexpected content type from Claude API')

        const result = JSON.parse(content.text)
        return Response.json(result)

    } catch (error) {
        console.error('Claude API error:', error)
        return Response.json({ error: 'Failed to analyze resume' }, { status: 400 })
    }

}ß