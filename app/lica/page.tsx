'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { useState } from 'react'

const lica = axios.create({
    baseURL: 'https://api.lica.world/api/v1',
    headers: {
        'Content-Type': 'application/json',
        //TODO: put this in a .env file
        'x-api-key': 'V13zIObBTTXemLCPhOMvt5ZnULi4jRlE',
    },
})

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const LicaPage = () => {
    const [input, setInput] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [results, setResults] = useState<any>(null)

    async function getResult(request_id: string) {
        try {
            const response = await axios.get(
                `/api/get-results?request_id=${request_id}`,
            )
            const result = await response.data
            console.log(result)
            setResults(result)
        } catch (e) {
            setError(true)
            console.log(e)
        }
    }

    async function generate() {
        setLoading(true)
        try {
            const response = await lica.post('/ml-requests/', {
                payload: {
                    text: input,
                },
                model: 'TEXT_TO_IMAGE',
            })
            const result = await response.data
            // { data: { request_id: 'Ajj0sitlynqHNXMLCl3F' } }
            await wait(1000)
            if (result?.data?.request_id) {
                console.log('Fetching Images')
                const images = await getResult(result.data.request_id)
                console.log(images)
                return
            }
        } catch (e) {
            setError(true)
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center flex-col gap-4">
            <div className="flex gap-2 w-full items-center justify-center">
                <Input
                    placeholder="Be Creative :)"
                    className="max-w-xl"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button onClick={generate}>Generate</Button>
            </div>

            {loading && (
                <div className="bg-neutral-200 animate-pulse size-96 rounded-lg" />
            )}
            {results && (
                <div className="flex flex-row gap-2">
                    {results.map((result: string, index: number) => (
                        <div
                            key={index}
                            className="size-48 rounded-lg overflow-hidden"
                        >
                            <img src={result} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LicaPage
