import React from 'react'

const About = () => {
  return (
    <section  className="text-center my-2 flex flex-col gap-3">
      <ul>
        <li>
          <p className="font-bold text-lg">Problem Solving lover</p>
          <p className="text-sm">
            fond of participating in algorithm problem competitions
          </p>
          <p className="text-sm">
            also like making problems and holding competitions.
          </p>
        </li>
        <li className="font-bold text-lg">Researcher & Developer</li>
        <li>
          <p className="font-bold text-lg">Finished graduate school.</p>
          <p className="text-sm">
            Major : Voice Recognition Artificial Intelligence
          </p>
        </li>
        <li className="font-bold text-lg">Free soul</li>
      </ul>
      <hr />
      <h2 className="text-xl font-bold">SNS</h2>
      <ul>
        <li>
          <a
            className="hover:underline  hover:text-blue"
            href="https://snrnsidy.tistory.com/"
            target="_blank"
          >
            Tistory
          </a>
        </li>
        <li>
          <a
            className="hover:underline hover:text-blue"
            href="https://www.acmicpc.net/user/snrnsidy"
            target="_blank"
          >
            Baekjoon
          </a>
        </li>
      </ul>
    </section>
  )
}
export default About
