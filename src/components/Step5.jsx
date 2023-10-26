import Icon5 from '../icons/icon5.svg'

export const Step5 = () => {
  return (
    <div className="container mx-auto w-10/12">
      <div className="text-center py-9">
        <div className="flex justify-center">
          <img src={Icon5} alt="icono 5" />
        </div>

        <h2 className="font-bold text-2xl">Congratulations! 🎉</h2>
        <p style={{ color: '#6B7280' }} className="pb-4">Your profile has been created and you are now ready to start participating in challenges that match your interests and coding experience level.</p>
      </div>
    </div>
  )
}
