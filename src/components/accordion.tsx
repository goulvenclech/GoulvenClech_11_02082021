import React from "react"
/**
 * Just checking if the props are valids
 */
 interface Props {
  title: string,
  content: string | Array<string>
}
/**
 * An accordion element, with a title box, and a content
 * who is showed only on click
 */
export default class Accordion extends React.Component<any, any> {
  content: React.RefObject<HTMLDivElement>
  constructor(props:Props) {
    super(props)
    this.state = {
      isOpen: false,
      Height: "0px",
    }
    this.content = React.createRef()
  }
  /**
   * Open & close the Accordion, called by onClick() on the button
   */
  toggleAccordion = () => {
    // Needed by TypeScript, to be sure it's not null anymore after JSX rendering
    if(this.content && this.content.current) {
      this.setState({isOpen: (this.state.isOpen === false ? true : false)})
      this.setState({Height:(this.state.isOpen === true ? "0px" : this.content.current.scrollHeight + "px")})
    }
  }
  
  render() {
    return <article>
      <div className="my-4 bg-gray-200 rounded-lg">
        <button className="text-left w-full bg-primary rounded-lg py-2 px-4 text-white text-md flex" 
          onClick={this.toggleAccordion}>
          <p className="mr-auto">{this.props.title}</p>
          <svg xmlns="http://www.w3.org/2000/svg" className={this.state.isOpen ? "h-6 w-6 duration-300 -rotate-180" : "h-6 w-6 duration-300"}
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          ref={this.content}
          style={{ maxHeight: `${this.state.Height}` }}
          className="overflow-hidden duration-300 text-primary text-md"
        > 
        {
          // Content can be a string or a list of string
          typeof this.props.content === "string" ?
          <p className="px-4 py-2">
              {this.props.content}
          </p>
          :
          <ul className="px-4 py-2">
            {this.props.content.map((equipement: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => 
              <li key={index}>{equipement}</li>)}
          </ul>
        }
        </div>
      </div>
    </article>
  }
}
