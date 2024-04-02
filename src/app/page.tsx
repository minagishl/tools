import { APP_NAME } from './config';
import YAML from 'yaml'
import Link from 'next/link'

const tools_yaml = require('../constants/tools.yaml') as string
const tools = YAML.parse(tools_yaml)

export default function Home() {
  return (
    <main className="flex h-[100dvh] w-[100dvw] items-center justify-center font-sans">
      <div className="flex h-[100dvh] w-full max-w-screen-sm flex-col space-y-5 p-10">
        <h1 className="text-3xl font-bold">{APP_NAME}</h1>
        <ul className="space-y-2 list-disc pl-5">
          {tools.map((tool: any, index: string) => (
            <li key={index}>
              <Link href={tool.url}>{tool.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
