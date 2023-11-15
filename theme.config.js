import Link from "next/link";

const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
          <Link href={"https://github.com/smyalygames/anthonyberg-website/blob/main/LICENSE"}><time>{YEAR}</time> © Anthony Berg.</Link>
          <a href={"https://github.com/smyalygames/anthonyberg-website/"}>GitHub Repository</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
