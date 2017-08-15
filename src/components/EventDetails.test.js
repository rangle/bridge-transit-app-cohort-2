import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { EventDetails } from './EventDetails';

describe('EventDetails component tests', () => {
  const props = {
    event: {
      name: {
        text: "Toronto Code & Coffee | Third Sunday of Each Month in 2017",
      },
      url: "https://www.eventbrite.ca/e/toronto-code-coffee-third-sunday-of-each-month-in-2017-tickets-30433133321",
      description: {
        text: "Hey you! Have you joined the Ladies Learning Code mailing list? If not,\u00a0join here.\r\nWhat is Ladies Learning Code?\r\nWe're a Canada wide not-for-profit organization providing women, *men and youth the opportunity to learn beginner-friendly technical skills in a social and collaborative way. We're all about showing people that learning to code can be fun!\r\n*Men are welcome to attend (and they do!), but we encourage you to bring an additional female learner where possible\u00a0\r\n\u00a0\r\nWhat is Code & Coffee?\r\nWant to continue working on a project you built at a workshop? Have a project of your own you need some help and inspiration to complete? \r\nJoin us for Code and Coffee!\r\nCode and Coffee is an informal meetup to get together and code in a fun, social and collaborative environment. If you love our workshops you'll enjoy connecting with others from the Ladies Learning Code community of learners and mentors. Similarly to our workshops, we'll have some mentors available to help you with your projects but the real benefit of Code & Coffee is to connect with other learners and work through solving problems together!\u00a0\r\nThere are no requirements to attend other than the willingness to collaborate and learn something new. Bring a project or we'll have some available that you can work on! \u00a0All levels of expertise are welcome just\u00a0RSVP and bring your laptop and powercord.\u00a0\u00a0\r\n\u00a0\r\nQuestions?\r\nEmail us at info [at] ladieslearningcode.com\r\nYou can also find us here:\r\n",
      },
      start: {
        local: "2017-08-20T13:00:00",
      },
      end: {
        local: "2017-08-20T16:00:00",
      },
      is_free:  false,
      logo : {
        url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F28253674%2F183837305730%2F1%2Foriginal.jpg?h=200&w=450&rect=0%2C0%2C1000%2C500&s=b42f77f4a43a35ab28df4b3276da3494",
      }
  }};

  it('renders without crashing', () => {
    const wrapper = shallow(<EventDetails {...props}/>);

    expect(wrapper.find('div')).not.toHaveLength(0);
    expect(wrapper.find('div')).not.toHaveLength(1);
  });
});
