import sendMail from '../../../../utils/emailer';

export const feedbackResolvers = {
  submit: async (root, { email, feedback }) => {
    const subject = 'Zgłoszono uwagi do serwisu Polski Front-End';
    const body = `
      <p style="font-size: 1.4em;">
        Email: ${email}<br /> 
        Treść: <br />
        <i>${feedback}</i>
      </p>
    `;
    const sendingResult = await sendMail(body, email, subject);

    return sendingResult.success;
  }
};
